from gpiozero import MCP3008

channels = [0,1,2,3,4,5,6,7]

for ch in channels:
  tmp36 = MCP3008(channel=ch)
  print(ch,tmp36.value)
