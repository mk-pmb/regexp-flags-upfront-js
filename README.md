
<!--#echo json="package.json" key="name" underline="=" -->
regexp-flags-upfront
====================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Make regexps from a string that contains the flags as well as the pattern.
<!--/#echo -->



API
---

This module exports one function:

### makeRegExp(spec[, addFlags])

Where `spec` is your RegExp pattern, with a catch: If it starts with an
expression like `(?imu:)`, its letters will be used as the RegExp flags.

If `addFlags` is given, it should be an empty string or a string of only
letters. They will be merged with the flags possibly found in `spec`.

Returns a RegExp object.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
