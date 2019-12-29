<template>
    <div class="editor">
        <slot name="before-editor" />
        <div class="editor-content">
            <div class="editor-gutter language-ksql pa-2">
                <div v-for="lineno in lineCount" :key="lineno">
                    {{ lineno }}
                </div>
            </div>
            <pre class="editor-pre"><code
                     ref="editor"
                     class="editor-text language-ksql pa-2"
                     contenteditable="true"
                     spellCheck="false"
                     autocapitalize="off"
                     v-html="html"
                     autofocus
                     @keydown.prevent.tab="indent"
                     @keydown.prevent.shift.tab="unindent"
                     @keydown="onKeydown"
                     @keyup="onKeyup"
                     @keyup.enter="onEnterKeyup"
                     @keyup.backspace="onBackspaceKeyup"
                     @keydown.meta.enter="execute"
                     @blur="onBlur"
                     @paste="onPaste"
                     @cut="onCut"
                     @copy="onCopy"
                ></code></pre>
        </div>
        <slot name="after-editor" />
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Emit, Prop, Watch} from "vue-property-decorator";
    import KSQLQueryToolbar from "@/components/ksql/KSQLQueryToolbar.vue";
    import {htmlize, tokenize} from "@/ksql/pseudo-prism";

    @Component({
        components: {KSQLQueryToolbar}
    })
    export default class KSQLQueryContent extends Vue {

        /// SETTINGS

        @Prop({ default: 4 })
        private readonly tabSize!: number;

        @Prop({ default: () => [] })
        private readonly errors!: { msg: string; line: number; column: number; }[];

        @Prop({ default: false })
        private readonly syntaxHighlighting!: boolean;

        /**
         * Having a value prop and input() event supports v-model on the editor, which is a good standard practice for
         * Vue components. However, programmatically setting contenteditable means that the caret position is reset to
         * zero EVERY time.
         */
        @Prop({ default: "" })
        private readonly value!: string;

        @Emit()
        public input(): string {
            return (<HTMLElement>this.$refs.editor).innerHTML;
        }

        private _html: string = "";

        public set html(value: string) {
            this._html = value;

            this.preserveCaret();
            (<HTMLElement>this.$refs.editor).innerHTML = value;
            this.restoreCaret();
        }

        public get html(): string {
            return this._html;

            if (!this._html && this.value) {
                return this.value;
            } else {
                return this._html;
            }
        }

        /**
         * The `text` property gives components a way to retrieve the text-only content of the editable area.
         */
        public get text(): string {
            return (<HTMLElement>this.$refs.editor).innerText;
        }

        // Calculate number of lines based on newline characters.
        // I don't do this every keypress as that is excessive, there are only a few events which COULD change the
        // number of lines.

        private lineCount: number = 1;

        public calculateLineCount(): void {
            this.$nextTick(() => {
                const innerText = (<HTMLElement>this.$refs.editor).innerText;

                if (!innerText || innerText === "") {
                    this.lineCount = 0;
                } else {
                    const lineFeeds = innerText.match(/[\r]?\n/g) || [];
                    this.lineCount = lineFeeds.length;
                }
            });
        }

        private selectionRange: Range | null = null;

        private preserveCaret() {
            const selection = window.getSelection();
            if (selection !== null) {
                this.selectionRange = selection.getRangeAt(0);
                console.log(this.selectionRange);
            }
        }

        private restoreCaret() {
            if (this.selectionRange) {
                const selection = window.getSelection();
                if (selection !== null) {
                    selection.removeAllRanges();
                    selection.addRange(this.selectionRange);
                }
            }
        }

        /**
         * highlighting the code resets the caret position
         */
        public highlight(text: string) {
            return;

            this.preserveCaret();
            const tokens = tokenize(text);
            const html = htmlize(tokens);
            this.html = html.join('');
            this.restoreCaret();
        }

        /**
         * Emit execute command with the text when ctrl+enter (Windows) or cmd+enter (macOS) is pressed.
         */
        @Emit()
        public execute(): string {
            return this.text;
        }

        // Event Handling for contenteditable area

        private onKeyup(e: KeyboardEvent) {
            if (e.target === null) return;
            if (e.currentTarget === this.$refs.editor) {
                this.$nextTick(() => {
                    this.input();
                    this.highlight(this.text);
                });
            }
        }

        private onKeydown(e: KeyboardEvent) {

        }

        // Insert 4 spaces instead of dropping focus from the editable element.
        private indent(e: KeyboardEvent) {
            const selection = window.getSelection();

            if (!selection || selection.type === 'None' || selection.type === 'Caret') {
                document.execCommand("insertHTML", false, " ".repeat(this.tabSize))
            } else {
                // multi-line indent is a bit trickier since we have to find all the direct descendents of <pre> and
                // inject whitespace
                const range = selection.getRangeAt(0);
                console.log(range);
            }
        }

        private unindent(e: KeyboardEvent) {
            for (let i = 0; i < this.tabSize; i++) {
                document.execCommand("delete", false, "");
            }
        }

        private onEnterKeyup(e: KeyboardEvent) {
            this.input();
            this.calculateLineCount();
        }

        // Deleting a selection can possibly change the number of lines
        private onBackspaceKeyup(e: KeyboardEvent) {
            this.input();
            this.calculateLineCount();
        }

        public onBlur(e: FocusEvent) {
            console.log(e);
        }

        // Cutting a selection can change the number of lines.
        public onCut(e: ClipboardEvent) {
            this.calculateLineCount();
        }

        public onCopy(e: ClipboardEvent) {
        }

        // When using contenteditable, pasted text comes in with full HTML formatting, which we don't want in this case.
        public onPaste(e: ClipboardEvent) {
            console.log('TODO: strip formatting');
            console.log(e);
            this.calculateLineCount();
        }

        /// LIFECYCLE

        public mounted() {
            // if (this.value) {
            //     this.highlight(this.value);
            // }
        }
    }
</script>

<style scoped>
    .editor-content {
        display: flex;
        flex-direction: row;
        background-color: #2d2d2d;
    }

    .editor-error {
        text-decoration: underline;
        text-decoration-color: red;
        text-decoration-style: wavy;
    }

    .editor-pre {
        flex-grow: 2;
    }

    .editor-text {
        display: block;
        min-height: 20em;
        tab-size: 4;
        -moz-tab-size: 4;
    }

    .editor-gutter {
        overflow: hidden;
        flex-shrink: 0;
        min-width: 2rem;
        color: #8d8d8d;
        background-color: #2d2d2d;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;

        line-height: 1.5;
        text-align: right;
    }
</style>