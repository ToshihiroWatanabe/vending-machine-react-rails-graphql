FROM ruby:3.0.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
RUN mkdir /rails-api
WORKDIR /rails-api
COPY backend/Gemfile /rails-api/Gemfile
COPY backend/Gemfile.lock /rails-api/Gemfile.lock
RUN bundle install
COPY backend /rails-api

# Add a script to be executed every time the container starts.
COPY backend/entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
