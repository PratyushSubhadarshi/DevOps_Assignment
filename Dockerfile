FROM node:14

# pratyush is a non-root user with limited privileges
RUN useradd -m -r pratyush

WORKDIR /server

COPY package*.json ./

RUN npm install --unsafe-perm

COPY . .

# Here we Changed ownership of the working directory to user pratyush
RUN chown -R pratyush /server

EXPOSE 3000

# Switching to user pratyush
USER pratyush

CMD ["node", "server.js"]
