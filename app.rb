Bundler.require
require "sinatra"
# require "./sms.rb"
# require 'twilio-ruby'
# require 'rubygems'

class MyApp < Sinatra::Base
    get '/' do
        erb :index1
    end
    
    get '/landing' do
        @message = "Message: "
        erb :landing
    end
    
    post '/sent' do
        @message = params["message"].to_s
        # @message = @message[8..-1]
        # puts @message
        # send(@message)
        
        # @reciepient = "(831) 578-7881"
        # @message = message.sid
        erb :sent
    end
    
    get '/help' do
        @message = "Message: help"
        erb :sent
    end
    # post '/twil' do
    #   number = params['From']
    #   body = params['Body']
    
    #   content_type 'text/xml'
    #   "<Response>
    #      <Message>
    #       Hello #{number}. You said: #{body}
    #      </Message>
    #   </Response>"
    # end

end