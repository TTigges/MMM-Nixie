# MMM-Nixie
![Preview Screenshot, MMM-Nixie](https://abload.de/img/mmm-nixiencqie.jpg)
=====================
Who doesn't like Nixie tubes? This module is bringing a Nixie tube clock to your MagicMirror. It's not just another clock, it has all the layers for each digit (0 to 9), cycling through them, lighting up the active layer/digit – just like a real nixie tube.
## Installation
Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/TTigges/MMM-Nixie`.
## Using the module
Add the module to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Nixie',
		position: 'bottom',
		config: {
			tubes: true,
			wire: "on", // "on", off", "fine", "heavy"
			inactive: "on", // "on", off", "dimm"
			dimension: false
		}
	}

]
````
## Configuration options

The following properties can be configured:

| Option                       | Description
| ---------------------------- | -----------
| `tubes`                      | **Default:** `true` <br><br> When set to `false`, the fake glass tubes are not shown.
| `wire`                       | The glowing digits in a nixie tube are surrounded by a fine wire cage. This sets the visibility of the wire mesh.<br><br>**Possible values:** `"on"`, `"off"`, `"fine"`, `"heavy"`<br><br>**Note:** Automatically deactivated (set to `0`) when `tubes: false`
| `inactive`                   | A nixie tube has 10 digits (0 - 9) and only the active digits glow up. In case of the last digit, when active, 9 inactive digits can be seen in front of it.<br><br>**Default:** `on`<br><br>Can be set to `off` or `dimm`
| `dimension`                  | To show the layers of digits, `dimension` can be set to `true` to fake the depth of the nixie tube.<br><br>**Default:** `false`
## Developer Notes
This is a fun gimmick with no real function. I'm considering using a switch that hides all modules except this clock during night time.
Some things I'd like to add to the configuration: sizing (small, medium, big, huge), color choice, ...

The MIT License (MIT)
=====================

Copyright © 2018 TTigges

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
