// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd N:\GR\data\Param\event\m60.emevd     
// @linked    [0,82,166]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1039430100);
    InitializeCommonEvent(1, 9008000, 1039430101);
    InitializeCommonEvent(2, 9008000, 1039430102);
    InitializeCommonEvent(3, 9008000, 1039430103);
    InitializeCommonEvent(4, 9008000, 1039430104);
    InitializeCommonEvent(5, 9008000, 1039430105);
    InitializeCommonEvent(6, 9008000, 1039430340);
    InitializeCommonEvent(7, 9008000, 1039430341);
    InitializeCommonEvent(8, 9008000, 1039430106);
    InitializeCommonEvent(9, 9008000, 1039430107);
    InitializeCommonEvent(10, 9008000, 1039430223);
    InitializeCommonEvent(11, 9008000, 1039430310);
    InitializeCommonEvent(12, 9008000, 1039430108);
    InitializeCommonEvent(13, 9008000, 1039430700);
    InitializeCommonEvent(14, 9008000, 1039430109);
    InitializeCommonEvent(15, 9008000, 1039430110);
    InitializeCommonEvent(16, 9008000, 1039430111);
    InitializeCommonEvent(17, 9008000, 1039430112);
    InitializeCommonEvent(18, 9008000, 1039430113);
    InitializeCommonEvent(19, 9008000, 1039430114);
    InitializeCommonEvent(20, 9008000, 1039430115);
    
    InitializeCommonEvent(0, 90005300, 1039430800, 1039430341, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1039430340, 1039430341);
    InitializeCommonEvent(0, 90005477, 0);
    InitializeEvent(0, 1039432340, 1039430340, 1039430341);
    InitializeCommonEvent(0, 90005860, 1039430800, 0, 1039430340, 0, 1039430400, 0);
    InitializeCommonEvent(0, 90005872, 1039430340, 10, 0);
    InitializeCommonEvent(0, 90005871, 1039430340, 903150602, 10, 1039430341);
    InitializeCommonEvent(0, 90005706, 1039430700, 930023, 0);
    InitializeCommonEvent(0, 90005300, 1039430310, 1039430310, 40252, 0, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1039430700, true);
});

$Event(1039432340, Restart, function(X0_4, X4_4) {
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


