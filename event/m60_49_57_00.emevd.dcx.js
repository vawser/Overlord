// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1049570101);
    InitializeCommonEvent(1, 9008000, 1049570102);
    InitializeCommonEvent(2, 9008000, 1049570100);
    InitializeCommonEvent(3, 9008000, 1049570350);
    InitializeCommonEvent(4, 9008000, 1049570103);
    InitializeCommonEvent(5, 9008000, 1049570104);
    InitializeCommonEvent(6, 9008000, 1049570105);
    InitializeCommonEvent(7, 9008000, 1049570106);
    InitializeCommonEvent(8, 9008000, 1049570107);
    InitializeCommonEvent(9, 9008000, 1049570108);
    InitializeCommonEvent(10, 9008000, 1049570214);
    InitializeCommonEvent(11, 9008000, 1049570215);
    InitializeCommonEvent(12, 9008000, 1049570216);
    InitializeCommonEvent(13, 9008000, 1049570217);
    InitializeCommonEvent(14, 9008000, 1049570218);
    InitializeCommonEvent(15, 9008000, 1049570219);
    InitializeCommonEvent(16, 9008000, 1049570109);
    InitializeCommonEvent(17, 9008000, 1049570110);
    InitializeCommonEvent(18, 9008000, 1049570251);
    InitializeCommonEvent(19, 9008000, 1049570252);
    InitializeCommonEvent(20, 9008000, 1049570254);
    InitializeCommonEvent(21, 9008000, 1049570256);
    InitializeCommonEvent(22, 9008000, 1049570257);
    InitializeCommonEvent(23, 9008000, 1049570258);
    InitializeCommonEvent(24, 9008000, 1049570259);
    InitializeCommonEvent(25, 9008000, 1049570300);
    InitializeCommonEvent(26, 9008000, 1049570310);
    InitializeCommonEvent(27, 9008000, 1049570320);
    
    InitializeCommonEvent(0, 90005211, 1049570251, 30003, 20003, 1049572251, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1049570252, 30003, 20003, 1049572251, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005211, 1049570259, 30003, 20003, 1049572259, 1065353216, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005300, 1049570300, 1049570300, 1049570710, 0, 0);
    InitializeCommonEvent(0, 90005300, 1049570310, 1049570310, 1049570700, 0, 0);
    InitializeCommonEvent(0, 90005300, 1049570320, 1049570320, 1049570720, 0, 0);
    InitializeCommonEvent(0, 90005201, 1049570300, 30000, 20000, 1082130432, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005201, 1049570310, 30000, 20000, 1082130432, 0, 0, 0, 0, 0);
    InitializeEvent(0, 1049572350, 1049572351);
    InitializeEvent(1, 1049572350, 1049572351);
    InitializeEvent(2, 1049572350, 1049572352);
});

$Event(1049572350, Restart, function(X0_4) {
    DisableNetworkSync();
    CreateBulletOwner(1049570350);
    WaitFor(InArea(10000, 1049572350));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1049570350, X0_4, 900, 802105200, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1049570350, X0_4, 900, 802105210, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1049570350, X0_4, 900, 802105220, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1049570350, X0_4, 900, 802105230, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1049570350, X0_4, 900, 802105240, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1049570350, X0_4, 900, 802105250, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1049570350, X0_4, 900, 802105260, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1049570350, X0_4, 900, 802105270, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});


