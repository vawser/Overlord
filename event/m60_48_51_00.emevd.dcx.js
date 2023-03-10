// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048510800);
    InitializeCommonEvent(1, 9008000, 1048510810);
    InitializeCommonEvent(2, 9008000, 1048510200);
    InitializeCommonEvent(3, 9008000, 1048510201);
    InitializeCommonEvent(4, 9008000, 1048510202);
    InitializeCommonEvent(5, 9008000, 1048510100);
    InitializeCommonEvent(6, 9008000, 1048510101);
    InitializeCommonEvent(7, 9008000, 1048510102);
    InitializeCommonEvent(8, 9008000, 1048510103);
    InitializeCommonEvent(9, 9008000, 1048510104);
    InitializeCommonEvent(10, 9008000, 1048510105);
    InitializeCommonEvent(11, 9008000, 1048510106);
    InitializeCommonEvent(12, 9008000, 1048510107);
    
    InitializeCommonEvent(0, 90005211, 1048510202, 30001, 20001, 0, 0, 0, 0, 0, 0, 0);
    InitializeCommonEvent(0, 90005476, 1048510800, 1048510810);
    InitializeEvent(0, 1048512820, 1048510800, 1048510810);
    InitializeCommonEvent(0, 90005871, 1048510800, 903150607, 10, 1048510810);
    InitializeCommonEvent(0, 1048512800, 1048510800, 0, 1048510800, 0, 1048510700, 0);
    InitializeCommonEvent(0, 90005872, 1048510800, 10, 0);
});

$Event(1048512800, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (Signed(X16_4) != 0) {
        Unknown200476(X0_4, X16_4);
    }
    if (EventFlag(X0_4)) {
        DisableCharacter(X8_4);
        DisableCharacterCollision(X8_4);
        ForceCharacterDeath(X8_4, false);
        DisableCharacter(1048510810);
        DisableCharacterCollision(1048510810);
        ForceCharacterDeath(1048510810, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(X16_4) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(X16_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X8_4) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(X8_4, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(X8_4));
    GotoIf(S0, X12_4 == 3);
    if (X12_4 != 2) {
        if (X12_4 != 1) {
            HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.EnemyFelled);
            Goto(L1);
        }
        HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.GreatEnemyFelled);
    }
    Goto(L1);
S0:
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.DemigodFelled);
    Goto(L1);
    HandleBossDefeatAndDisplayBanner(X8_4, TextBannerType.LegendFelled);
L1:
    SetEventFlagID(X0_4, ON);
    if (X4_4 != 0) {
        SetEventFlagID(X4_4, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(X16_4) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(X16_4);
    EndEvent();
    WaitFixedTimeSeconds(X20_4);
});

$Event(1048512820, Restart, function(X0_4, X4_4) {
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


