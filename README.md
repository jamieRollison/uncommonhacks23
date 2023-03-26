# uncommonhacks23

## Inspiration
Time and time again, our team has observed the ways that technology has redefined human connection. From video games, to social media and online messaging platforms-- Companies have created dozens of services and have developed standardized messaging across platforms. In exchange for efficiency and uniformity, we feel that modern communication often comes to the detriment of creative expression, sentimentality, and the highly unique artifacts that are often associated with analog mediums such as handwritten letters. 
Letra is our response to this phenomena. By providing a space for users to create customizable digital letters-- each with its own unique link-- we hope to preserve the efficiency that technology has provided us, while reclaiming and reestablishing creativity in digital correspondences.

## What it does
Letra is simple, but the possibilities are endless! Through Letra, users are able to:

* **Generate a unique link for each individual letter**: Once the user composes a letter and sends it off, a unique link is sent to the recipient(s) of choice. The letter has 1 unique URL, and can only be accessed by the singular URL.

* **Change fonts to customize a letter**: Users are provided a variety of fonts from the Google-fonts API that allow them to customize the text contents of their letter. Users have the options between traditional serif fonts, cursive or "handwritten" fonts, and silly fonts such as "Redacted Script"-- which makes the letter literally unreadable. 

* **Use AI to moderate and encourage positive correspondences**: Letra uses MonkeyLearn-- an AI API that conducts sentiment analysis on text input-- to check that the user is not sending messages with harmful or hurtful phrasing. The AI is intended to curb the malicious use of Letra, and encourage positive interactions between sender and recipient.

## How we built it
Letra is a web-app that uses HTML and Tailwind for its styling, with the support of Svelte as our front-end framework. The Letra team utilizes MongoDB to deploy a database that pulls and stores information about recipients, senders, and the contents of each respective letter. TypeScript is the primary language used for Letra's backend.


## What's next for Letra?
In future versions of Letra, the team hopes to implement more customization features. Among these features are:

* **"Create a canvas"**: Users will be able to use clip-art & PNG images as drag-and-drop stickers to attach to their letter. These images would then be rendered and saved into the database, and when sent to its recipient, will also be attached to the letter and maintain its position.

* **Text color options**: Users will be able to choose from a variety of colors and change the color of the text prior to sending.

* **Paper texture options**: There will be a collection of pre-set paper textures for users to choose from, rather than the default "white paper with folds". This adds another feature of letter-writing aesthetics and puts it in the hands of the writer.

* **Implement an "Anonymous sender" feature**: Instead of enforcing an input for the Sender/"to" section of the letter form, users may have the opportunity to send sentimental letters anonymously. The letter will still be sent using a unique link, but the recipient will not have any access to Sender information.
