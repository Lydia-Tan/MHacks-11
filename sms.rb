require 'twilio-ruby'

def send(mess)
    account_sid = "ACd710d1295d55550e5ad8f40f4e575409" # Your Account SID from www.twilio.com/console
    auth_token = "f6070d6eea66258425a89e6272a74a1f"   # Your Auth Token from www.twilio.com/console
    
    @client = Twilio::REST::Client.new account_sid, auth_token
    message = @client.messages.create(
        body: mess,
        to: "+8315787881",    # Replace with your phone number
        from: "+4154633403")  # Replace with your Twilio number
    puts message.sid
end