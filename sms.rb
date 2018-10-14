require 'twilio-ruby'
require 'rubygems'

# def send(mess)
    account_sid = "ACd710d1295d55550e5ad8f40f4e575409" # Your Account SID from www.twilio.com/console
    auth_token = "f6070d6eea66258425a89e6272a74a1f"   # Your Auth Token from www.twilio.com/console
    @client = Twilio::REST::Client.new(account_sid, auth_token)
    puts "hi2"
    # next
    message = @client.messages.create(
        from: '+14154633403',
        to: '+18315787881',
        body: "hungry pizza"
    )
    puts message.body
# end

# send("hi")