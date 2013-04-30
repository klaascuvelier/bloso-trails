<?php

    $data = '';

    if (isset($_GET['city'])) {
        $city   = $_GET['city'];
        $url    = 'http://www.routeyou.com/route/search_group.nl?group_id=' . $city;
        $data   = file_get_contents($url);
    } else if (isset($_GET['track'])) {
        $track  = $_GET['track'];
        $url    = 'http://api.routeyou.com/1.0/json/Instruction/o78va42d22qjgr1mdptrktk9f5?id=2&method=getTrack&' .
                    'params={"otnId":"' . $track . '"}';
        $data   = file_get_contents($url);
    }

    die($data);