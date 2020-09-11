<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ques2.js</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
</head>

<body>
    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
    <h1>Input test</h1>
    <br>
    <br>
    <input name="text 1" class="input" placeholder="Enter the text here">
    <br>
    <br>
    <input name="text 2" class="input" placeholder="Copy the above text">
    <br>
    <br>
    <button onclick="change()">copy</button>
    <script>
        function change() {
            const element = document.getElementsByClassName("input");
            element[1].value = element[0].value;
            console.log(value)
        }
    </script>
</body>

</html>
