// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
// Inspiration: http://css-tricks.com/ie-10-specific-styles/
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
// Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_audio
// Mythium Archive: https://archive.org/details/mythium/
jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'share/music/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "陈翔—遇见.mp3",
                "length": "2:20",
                "file": "陈翔—遇见"
            }, {
                "track": 2,
                "name": "Dream-It-Possible.mp3",
                "length": "3:24",
                "file": "Dream-It-Possible"
            }, {
                "track": 3,
                "name": "陈鸿宇—理想三旬.mp3",
                "length": "3:30",
                "file": "陈鸿宇—理想三旬"
            }, {
                "track": 4,
                "name": "陈奕迅—一丝不挂.mp3",
                "length": "4:02",
                "file": "陈奕迅—一丝不挂"
            }, {
                "track": 5,
                "name": "SKOTT—Glitter&Gloss.mp3",
                "length": "5:05",
                "file": "SKOTT—Glitter&Gloss"
            }, {
                "track": 6,
                "name": "张国荣—怪你过份美丽(Live).mp3",
                "length": "4:34",
                "file": "张国荣—怪你过份美丽(Live)"
            }, {
                "track": 7,
                "name": "鹿先森乐队—春风十里.mp3",
                "length": "6:16",
                "file": "鹿先森乐队—春风十里"
            }, {
                "track": 8,
                "name": "鹿先森乐队—很久以前.mp3",
                "length": "7:21",
                "file": "鹿先森乐队—很久以前"
            }, {
                "track": 9,
                "name": "王馨平—别问我是谁.mp3",
                "length": "5:05",
                "file": "王馨平—别问我是谁"
            }, {
                "track": 10,
                "name": "谢春花—借我.mp3",
                "length": "4:17",
                "file": "谢春花—借我"
            }, {
                "track": 11,
                "name": "赵雷—成都.mp3",
                "length": "5:28",
                "file": "赵雷—成都"
            }, {
                "track": 12,
                "name": "赵雷—三十岁的女人.mp3",
                "length": "5:28",
                "file": "赵雷—三十岁的女人"
            }, {
                "track": 13,
                "name": "Christina&Perri—A-Thousand-Years.mp3",
                "length": "4:45",
                "file": "Christina&Perri—A-Thousand-Years"
            }, {
                "track": 14,
                "name": "张学友—我醒着做梦.flac",
                "length": "4:04",
                "file": "张学友—我醒着做梦"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackLength = value.length;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                } else {
                    trackNumber = '' + trackNumber;
                }
                $('#plList').append('<li><div class="plItem"><div class="plNum">' + trackNumber + '.</div><div class="plTitle">' + trackName + '</div><div class="plLength">' + trackLength + '</div><div class="plDown"><a href='+mediaPath  +trackName+' download='+ trackName +'></a></div></div></li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('播放');
            }).bind('pause', function () {
                playing = false;
                npAction.text('暂停');
            }).bind('ended', function () {
                npAction.text('暂停');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});