<template>
    <div>
        <KSQLQueryToolbar @execute="execute" @check="validate" />
        <v-sheet class="editor-content">
            <div class="editor-gutter pa-2">
                <div v-for="lineno in lineCount" :key="lineno">
                    {{ lineno }}
                </div>
            </div>
            <pre ref="editor"
                 class="editor-text pa-2"
                 contenteditable="true"
                 spellCheck="false"
                 autocapitalize="off"
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
                 v-html="content"
                 autofocus
            ></pre>
        </v-sheet>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Emit, Prop} from "vue-property-decorator";
    import KSQLQueryToolbar from "@/components/ksql/KSQLQueryToolbar.vue";

    @Component({
        components: {KSQLQueryToolbar}
    })
    export default class KSQLQueryContent extends Vue {

        @Prop({ default: 4 })
        private readonly tabSize!: number;

        @Prop({ default: () => [] })
        private readonly errors!: { msg: string; line: number; column: number; }[];

        // Current Text Representation of Editor
        private _contentText?: string = "";

        // Current innerHTML Representation of Editor
        private _contentHTML: any = "";

        private lineCount: number = 4;

        public get content(): string {
            // if (this.errors.length === 0) {
                return this._contentHTML;
            // } else {
            //     console.log('We have errors');
            //     return this._contentHTML + "errors";
            // }
        }

        public set content(html: string) {
            this._contentHTML = html;
        }

        public get textContent(): string {
            return this.$refs.editor.innerText;
        }

        // Calculate number of lines based on newline characters.
        // I don't do this every keypress as that is excessive, there are only a few events which COULD change the
        // number of lines.
        public calculateLineCount(): void {
            this.$nextTick(() => {
                const innerText = this.$refs.editor.innerText;

                if (!innerText || innerText === "") {
                    this.lineCount = 0;
                } else {
                    const lineFeeds = innerText.match(/[\r]?\n/g) || [];
                    this.lineCount = lineFeeds.length;
                }
            });
        }

        @Emit()
        public change(): string {
            return this.$refs.editor.innerText;
        }

        @Emit()
        public execute(): string {
            return this.$refs.editor.innerText;
        }

        @Emit()
        public validate(): string {
            return this.$refs.editor.innerText;
        }

        // Event Handling for contenteditable area

        private onKeyup(e: any) {
            this.content = e.target.innerHTML;
            this._contentText = e.target.innerText;
        }

        private onKeydown(e) {

        }

        // Insert 4 spaces instead of dropping focus from the editable element.
        private indent(e: any) {
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

        private unindent(e: any) {
            for (let i = 0; i < this.tabSize; i++) {
                document.execCommand("delete", false, "");
            }
        }

        private onEnterKeyup(e: any) {
            console.log('enter');
            this.calculateLineCount();
        }

        // Deleting a selection can possibly change the number of lines
        private onBackspaceKeyup(e: any) {
            this.calculateLineCount();
        }

        public onBlur(e: any) {
            console.log(e);
        }

        // Cutting a selection can change the number of lines.
        public onCut(e: any) {
            console.log('cut event');
            this.calculateLineCount();
        }

        public onCopy(e: any) {
            console.log('copy event');
        }

        // When using contenteditable, pasted text comes in with full HTML formatting, which we don't want in this case.
        public onPaste(e: any) {
            console.log('paste event');
            console.log('TODO: strip formatting');
            console.log(e);
            this.calculateLineCount();
        }
    }
</script>

<style scoped>
    .editor-content {
        display: flex;
        flex-direction: row;
        font-family: 'DejaVu Sans Mono', monospace;
    }

    .editor-error {
        text-decoration: underline;
        text-decoration-color: red;
        text-decoration-style: wavy;
    }

    .editor-text {
        flex-grow: 2;
        min-height: 20em;
        tab-size: 4;
        -moz-tab-size: 4;
    }

    .editor-gutter {
        overflow: hidden;
        flex-shrink: 0;
        color: #5b5b5b;
        background-color: #EEEEEE;
        text-align: right;
    }
</style>