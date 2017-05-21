# Chip Trader
a chip trader for BN Nostalgia
![Image: reply page](https://cdn.discordapp.com/attachments/220053437138599936/315967179868733441/unknown.png)


# Credits
This Chip Trader is based on an earlier work of mine, SFRP's Card Trader, which borrowed a function and structure from Omega's Noise Form Card Gen code. Substantially rewritten to implement new techniques.

# FAQ
## "Why not split the array into a separate file?"
I tried, but modern anti-XSS protections prevent code on one domain from accessing arrays stored in a script from another domains.

# How it works
The javascript inserts a drop-down select box on the /post/ pages that acts as player input. 

The rest of the code is triggered when the submit button is pressed.

First, it checks to see if somebody is trying to fake their chip prize. Then, depending on selection, it will roll a d20 dice to determine if a Mega Chip should drop or not. Then it chooses a chip from an array, dependant on which tier the player chose. Lastly, it appends a quote containing the chip name. Then it finishes submitting the post to the server.

![Image: screenshot of Chip Get!](https://cdn.discordapp.com/attachments/220053437138599936/315968749020905482/unknown.png)
