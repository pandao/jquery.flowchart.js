# jquery.flowchart.js

jQuery plugin for [flowchart.js](https://github.com/adrai/flowchart.js).

####Example

[Demo](https://pandao.github.io/jquery.flowchart.js/examples/index.html)

####Usage

```html
<div class="flowchart">
st=>start: User login
op=>operation: Login operation
cond=>condition: Login successful Yes or No?
e=>end: Into admin panel

st->op->cond
cond(yes)->e
cond(no)->op
</div>

<script src="js/raphael.min.js"></script>
<script src="js/jquery.min.js"></script>
<script src="js/flowchart.min.js"></script>
<script src="../src/jquery.flowchart.js"></script>
<script type="text/javascript">
    $(function() {
        $(".flowchart").flowChart();
    });
</script>
```

####Install & download

Bower install:

    bower install jquery.flowchart.js
    
Download: 

- [jquery.flowchart.js](https://raw.githubusercontent.com/pandao/jquery.flowchart.js/master/dist/jquery.flowchart.js)
- [jquery.flowchart.min.js](https://raw.githubusercontent.com/pandao/jquery.flowchart.js/master/dist/jquery.flowchart.min.js)

####Thanks

Thanks to [flowchart.js](https://github.com/adrai/flowchart.js)'s work.

####Changes

[Change logs](https://github.com/pandao/jquery.flowchart.js/blob/master/CHANGE.md)

####License

The [MIT](https://github.com/pandao/jquery.flowchart.js/blob/master/LICENSE) license.

Copyright (c) 2015 Pandao
