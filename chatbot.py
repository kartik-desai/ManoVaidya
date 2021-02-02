from chatterbot.trainers import ListTrainer
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
bot=ChatBot('Test')

rainer = ChatterBotCorpusTrainer(bot)
trainer.train("chatterbot.corpus.english")

while True:
    request=input('You: ')
    response=bot.get_response(request)
    print('bot:',response)
