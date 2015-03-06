<?php
    // 受け渡されたデータの処理
    // データベースの検索と更新は，ここでやる
    
    /* 渡されるデータ 
        ・ユーザのIDとパスワード
            渡されなければ，ログインを促す
            渡されれば，そのユーザの視聴履歴をデータベースで検索する
            
        ・絞り込み条件（あとでいい）
            データ形式は未定
            渡されなければ，デフォルトの表示設定
            データベースの検索クエリに関係する
            
        ・更新すべきデータ
            json形式で渡す（予定）
            更新すべきアニメのタイトル，見た話数，ステータスの情報
            渡されたら，データベースの更新 -> 検索
    */
?>

<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>AnimeXP</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <link rel="stylesheet" type="text/css" href="./colorbox/colorbox.css" />
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="./colorbox/jquery.colorbox.js"></script>
    <script type="text/javascript" src="index.js"></script>    
</head>
<body>
    <div class="contentsArea">
        <div class="title">AnimeXP</div>
        
        <table class="watchLog">
            <tr align="center">
                <th class="category"><input type="button" value="カテゴリ"></th>
                <th class="title"><input type="button" value="タイトル"></th>
                <th class="whenStart"><input type="button" value="開始"></th>
                <th class="watchedEpisodeNum"><input type="button" value="見た話数"></th>
                <th class="status"><input type="button" value="ステータス"></th>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="allWatched" value="全部見た">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_on" value="見てる">
                    <input type="button" class="stopWatching_off" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_off" value="見てる">
                    <input type="button" class="stopWatching_on" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_on" value="見たい">
                    <input type="button" class="notWatch_off" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_off" value="見たい">
                    <input type="button" class="notWatch_on" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="allWatched" value="全部見た">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_on" value="見てる">
                    <input type="button" class="stopWatching_off" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_off" value="見てる">
                    <input type="button" class="stopWatching_on" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_on" value="見たい">
                    <input type="button" class="notWatch_off" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_off" value="見たい">
                    <input type="button" class="notWatch_on" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="allWatched" value="全部見た">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_on" value="見てる">
                    <input type="button" class="stopWatching_off" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_off" value="見てる">
                    <input type="button" class="stopWatching_on" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_on" value="見たい">
                    <input type="button" class="notWatch_off" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_off" value="見たい">
                    <input type="button" class="notWatch_on" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="allWatched" value="全部見た">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_on" value="見てる">
                    <input type="button" class="stopWatching_off" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_off" value="見てる">
                    <input type="button" class="stopWatching_on" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_on" value="見たい">
                    <input type="button" class="notWatch_off" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_off" value="見たい">
                    <input type="button" class="notWatch_on" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="allWatched" value="全部見た">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_on" value="見てる">
                    <input type="button" class="stopWatching_off" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_off" value="見てる">
                    <input type="button" class="stopWatching_on" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_on" value="見たい">
                    <input type="button" class="notWatch_off" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_off" value="見たい">
                    <input type="button" class="notWatch_on" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="allWatched" value="全部見た">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_on" value="見てる">
                    <input type="button" class="stopWatching_off" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="nowWatching_off" value="見てる">
                    <input type="button" class="stopWatching_on" value="切った">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_on" value="見たい">
                    <input type="button" class="notWatch_off" value="見てない">
                </td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
                <td class="watchedEpisodeNum">
                    <input type="button" value="0">
                    <input type="button" value="-">
                    <input type="text" value="4" size="4">/12
                    <input type="button" value="+">
                    <input type="button" value="all">
                </td>
                <td class="status">
                    <input type="button" class="toWatch_off" value="見たい">
                    <input type="button" class="notWatch_on" value="見てない">
                </td>
            </tr>
        </table>
    </div>
</body>
</html>