FROM node:10.16.2-jessie as builder
COPY . /home/node/app
WORKDIR /home/node/app
ENV NODE_ENV production
RUN yarn install
RUN yarn run build || :

FROM nginx
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
# Make it work in OpenShift (uid 1001)

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx
# users are not allowed to listen on priviliged ports
RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf
EXPOSE 8081
# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf
