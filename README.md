# Cooper-Challenge

## Brief Description
This is my solution for the Cooper Challenge, the Cooper Challenge is an often tested physical activity event, which tests the endurance of people.

## Attention
Some of the 'Should get:' messages below will not match exactly the ones you will receive.
## Getting Started
Make sure you are using chrome as your browser
In terminal type: `open SpecRunner.html`
* Should get: Jasmine Spec Runner Page (Top of page says Jasmine and should say below: '144 Specs, 0 failures')
Right click on the page and click inspect
* Should get: Menu options on the top right of your screen, click 'Console'.

## Become a Person
In the Console, type: `var me = new Person({gender: 'male', age: 30});`
* Should get: `undefined`;

## Run Cooper Test
In the Console, type: `me.run_cooper();`
* Should get: `undefined`;

## Check your Status
See your status based on the distance you ran, type: `me.cooperStatus;`
* Should get: `"Below Average"`

## Check your Cooper Test Message
See how far you ran also, type: `me.cooperMessage;`
* Should get: `You ran 1800m and your status is Below Average.`
