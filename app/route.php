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
    } else if (isset($_GET['token'])) {
        $url    = "http://www.routeyou.com/plugin.nl?charset=utf-8&width=100%25&height=544px&bgColor=%23FFF&hideParams=1&enableRoutesHeader=1&enableRoutes=1&enableLocationsHeader=1&enableLocations=0&showSidebar=1&groupId=2487&fullGroup=&css=bloso.css&userId=&autoZoom=1&link=https%3A//www.bloso.be/sportpromotie/mountainbikeroutes/Pages/routeview.aspx%3Froute%3D%25id%25&locationLink=https%3A//www.bloso.be/sportpromotie/MountainbikeroutesSite/Pages/POI-informatie.aspx%3Flocation%3D%25location_id%25%26text%3D%25text_id%25&target=_top&language=&location=&keywords=&score=&bounds=%22%22&theme=&characteristic=&type=&minimum_distance=&maximum_distance=&sort_routes=0&showPrivateUserRoutes=0&referer=https%3A//www.bloso.be/sportpromotie/mountainbikeroutes/Pages/groupview.aspx%3Fgroup%3D2487%26ProvincieGroepID%3D1933%26GemeenteGroepID%3D2487&utm_medium=Embed%20iFrame&utm_campaign=Route%20Search#lat=50.82908909221737&lng=2.9161834716796875&z=12";
        $data   = file_get_contents($url);

        $start  = strpos($data, "OTN.Settings.token");
        $end    = strpos($data, ";", $start);
        $data   = substr($data, $start + 30, $end - $start - 30);

        $matches = array();
        preg_match("/'([a-z0-9]+)'/", $data, $matches);
        $data   = $matches[1];
    }

    die($data);