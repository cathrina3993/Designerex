
FROM cypress/included:12.11.0
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install
COPY . .
ENTRYPOINT ["npx", "cypress", "run"]
