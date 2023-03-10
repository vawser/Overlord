// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1041500100);
    InitializeCommonEvent(1, 9008000, 1041500101);
    InitializeCommonEvent(2, 9008000, 1041500800);
    InitializeCommonEvent(3, 9008000, 1041500102);
    InitializeCommonEvent(4, 9008000, 1041500103);
    InitializeCommonEvent(5, 9008000, 1041500104);
    InitializeCommonEvent(6, 9008000, 1041500105);
    InitializeCommonEvent(7, 9008000, 1041500106);
    InitializeCommonEvent(8, 9008000, 1041500107);
    InitializeCommonEvent(9, 9008000, 1041500108);
    InitializeCommonEvent(10, 9008000, 1041500109);
    InitializeCommonEvent(11, 9008000, 1041500110);
    InitializeCommonEvent(12, 9008000, 1041500111);
    
    InitializeCommonEvent(0, 90005870, 1041500800, 904680602, 19);
    InitializeCommonEvent(0, 90005860, 1041500800, 0, 1041500800, 0, 30310, 0);
    InitializeEvent(0, 1041502200, 0);
});

$Event(50, Default, function() {
    InitializeCommonEvent(0, 90005201, 1041500800, 30009, 20009, 1106247680, 0, 0, 0, 0, 0);
});

$Event(1041502200, Restart, function() {
    if (!EventFlag(1041500800)) {
        WaitFor(SpecialStandbyEndedFlag(1041500800));
    }
L0:
    DeleteMapSFX(1041502200, false);
    EndEvent();
});


