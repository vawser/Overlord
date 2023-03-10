// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1049370100);
    InitializeCommonEvent(1, 9008000, 1049370950);
    InitializeCommonEvent(2, 9008000, 1049370800);
    InitializeCommonEvent(3, 9008000, 1049370801);
    InitializeCommonEvent(4, 9008000, 1049370700);
    InitializeCommonEvent(5, 9008000, 1049370701);
    InitializeCommonEvent(6, 9008000, 1049370101);
    InitializeCommonEvent(7, 9008000, 1049370102);
    InitializeCommonEvent(8, 9008000, 1049370103);
    InitializeCommonEvent(9, 9008000, 1049370104);
    InitializeCommonEvent(10, 9008000, 1049370105);
    InitializeCommonEvent(11, 9008000, 1049370106);
    InitializeCommonEvent(12, 9008000, 1049370107);
    InitializeCommonEvent(13, 9008000, 1049370108);
    InitializeCommonEvent(14, 9008000, 1049370109);
    InitializeCommonEvent(15, 9008000, 1049370110);
    InitializeCommonEvent(16, 9008000, 1049370111);
    InitializeCommonEvent(17, 9008000, 1049370112);
    InitializeCommonEvent(18, 9008000, 1049370299);
    InitializeCommonEvent(19, 9008000, 1049370113);
    InitializeCommonEvent(20, 9008000, 1049370114);
    InitializeCommonEvent(21, 9008000, 1049370115);
    InitializeCommonEvent(22, 9008000, 1049370116);
    InitializeCommonEvent(23, 9008000, 1049370117);
    InitializeCommonEvent(24, 9008000, 1049370850);
    InitializeCommonEvent(25, 9008000, 1049370118);
    InitializeCommonEvent(26, 9008000, 1049370119);
    InitializeCommonEvent(27, 9008000, 1049370120);
    InitializeCommonEvent(28, 9008000, 1049370121);
    InitializeCommonEvent(29, 9008000, 1049370122);
    
    RegisterBonfire(1049370000, 1049371950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005251, 1049370200, 1101004800, 0, -1);
    InitializeCommonEvent(0, 90005300, 1049370800, 1049370801, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1049370800, 1049370801);
    InitializeEvent(0, 1049372291, 1049370800, 1049370801);
    InitializeCommonEvent(0, 90005871, 1049370800, 903150605, 10, 1049370801);
    InitializeCommonEvent(0, 90005860, 1049370800, 0, 1049370800, 0, 1049370100, 0);
    InitializeCommonEvent(0, 90005872, 1049370800, 10, 0);
    InitializeCommonEvent(0, 90005870, 1049370850, 904980606, 24);
    InitializeCommonEvent(0, 90005860, 1049370850, 0, 1049370850, 0, 1049370110, 0);
    InitializeEvent(0, 1049372299, 0);
    InitializeCommonEvent(0, 90005300, 1049370299, 1049370299, 1049370700, 0, 0);
    InitializeCommonEvent(0, 90005725, 4780, 4781, 4783, 1049379205, 1049370700, 1049370701, 1049376700);
    InitializeCommonEvent(0, 90005703, 1049370700, 4781, 4782, 1049379206, 4781, 4780, 4784, 0);
    InitializeCommonEvent(0, 90005704, 1049370700, 4781, 4780, 1049379206, 3);
    InitializeCommonEvent(0, 90005702, 1049370700, 4783, 4780, 4784);
    InitializeCommonEvent(0, 90005703, 1049370701, 4781, 4782, 1049379207, 4781, 4780, 4784, 0);
    InitializeCommonEvent(0, 90005704, 1049370701, 4781, 4780, 1049379207, 3);
    InitializeCommonEvent(0, 90005728, 1049370701, 1049372706, 1049372707);
    InitializeCommonEvent(0, 90005727, 4781, 1049370700, 1049370701, 4780, 4783);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1049370700, true);
    SetCharacterBackreadState(1049370701, true);
});

$Event(1049372291, Restart, function(X0_4, X4_4) {
    if (CharacterDead(X0_4)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(X0_4, 11825)) {
        WaitFor(CharacterBackreadStatus(X4_4));
        SetSpEffect(X0_4, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(X4_4));
    SetSpEffect(X0_4, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(1049372299, Restart, function() {
    WaitFor(InArea(10000, 1049372299));
    ChangeCharacterPatrolBehavior(1049370299, 1049373299);
});


