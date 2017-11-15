//callback hell
$ajax(url1, function (data) {
    $ajax(url2, function (data) {
        $ajax(url3, function (data) {
            $ajax(url5, function (data) {
                $ajax(url6, function (data) {
                    $ajax(url7, function (data) {
                        //do something
                        //WTF
                    });
                });
            });
        });
    });
});