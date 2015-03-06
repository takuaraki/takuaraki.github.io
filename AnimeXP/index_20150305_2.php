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
    <div class="headerArea">
        <table class="toolBox">
            <tr>
                <td class="login">
                    <span>　ID</span><input type="text"> <span>password</span><input type="text"> <input class="loginBtn" type="button" value="Login">
                    <span class="message">　※ログインしないと表が保存できません．</span>
                </td>
                <td class="update">
                    <input type="button" class="updateBtn" value="表を保存">
                </td>
            </tr>
        </table>
    </div>
    
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
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ヒカルの碁ああああああああああああああああああああああああああああああああああああああああああ</td>
                <td class="whenStart">かなり前</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">ジョジョ</td>
                <td class="whenStart">2015/01</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">エウレカセブン</td>
                <td class="whenStart">?</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
            <tr align="center">
                <td class="category">アニメ</td>
                <td class="title">アクセルワールド</td>
                <td class="whenStart">割と最近</td>
            </tr>
        </table>
    </div>
</body>
</html>