function foo() {
    $.get('http://localhost:8080/test', function(data) {
        $('#test_result').html(data);
    });
};