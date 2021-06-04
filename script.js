/* ========================================================
ページ内ジャンプの位置合わせ
=========================================================*/
// $(function () {
//     var windowWidth = $(window).width();
//     var headerHight = 500;
//     jQuery('a[href^=#]').click(function () {
//         var speed = 1000;
//         var href = jQuery(this).attr("href");
//         var target = jQuery(href == "#" || href == "" ? 'html' : href);
//         var position = target.offset().top - headerHight;
//         jQuery('body,html').animate({ scrollTop: position }, speed, 'swing');
//         return false;
//     });
// });
/* ========================================================
ページ内ジャンプの位置合わせここまで
=========================================================*/



/* ========================================================
ハンバーガーメニュー
=========================================================*/


$(".c-hamburger-btn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".c-hamburger-menu").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".c-hamburger-menu__circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$(".c-hamburger-menu__list-a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".c-hamburger-btn").removeClass('active');//ボタンの activeクラスを除去し
    $(".c-hamburger-menu").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".c-hamburger-menu__circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});
/* ========================================================
ハンバーガーメニューここまで
=========================================================*/

/* ========================================================
各要素のふわっと表示
=========================================================*/
function fadeanime() {
    $('.js-fadeUpTrigger').each(function () { //fadeInTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('js-fadeup');// 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('js-fadeup');// 画面外に出たらfadeInというクラス名を外す
        }
        /* 時間差フェードイン研究中 */
        // $('.fadeintrigger.fadein').each(function (i) {
        //   let delay = 100;
        //   $(this).delay(i * delay).queue(function (next) {
        //     $(this).addClass('show');
        //     next();
        //   })
    });
}
/* ========================================================
各要素のふわっと表示ここまで
=========================================================*/



/* ========================================================
トップへ戻るボタン
=========================================================*/
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    var bottom = $("body").height() - $(window).height();//bodyに対するウインドウの位置を取得

    if (scroll > 300 && scroll < bottom - 300) {//200pxスクロールor最下部から300pxの場所にきたら
        $('#page-top').removeClass('js-DownMove');		// DownMoveというクラス名を除去して
        $('#page-top').addClass('js-UpMove');			// UpMoveというクラス名を追加して出現
    } else {//それ以外は
        if ($('#page-top').hasClass('js-UpMove')) {//UpMoveというクラス名が既に付与されていたら
            $('#page-top').removeClass('js-UpMove');	//  UpMoveというクラス名を除去し
            $('#page-top').addClass('js-DownMove');	// DownMoveというクラス名を追加して非表示
        }
    }

    // var wH = window.innerHeight; //画面の高さを取得
    // var footerPos = $('#footer').offset().top; //footerの位置を取得
    // if (scroll + wH >= (footerPos + 10)) {
    //     $('#page-top').removeClass('js-UpMove');	//  UpMoveというクラス名を除去し
    //     $('#page-top').addClass('js-DownMove');	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    // } else {//それ以外は
    //     if ($('#page-top').hasClass('js-UpMove')) {//UpMoveというクラス名がついていたら
    //         $('#page-top').css('bottom', '10px');// 下から10pxの位置にページリンクを指定
    //     }
    // }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 200);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
// 下部の固定リンク用
$('#page-top2').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 300);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
/*
========================================================
トップへ戻るボタンここまで
=========================================================*/

/* ========================================================
モーダルウインドウ
=========================================================*/

$('.c-modal__a').click(function () {
    var imgSrc = $(this).children().attr('src');
    $('.c-modal__bigimg').children().attr('src', imgSrc);
    $('.c-modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false
});

$('.c-modal__close-btn').click(function () {
    $('.c-modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    return false
});

/* ========================================================
モーダルウインドウここまで
=========================================================*/
