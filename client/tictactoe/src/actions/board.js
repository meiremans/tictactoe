export const DO_MOVE = 'DO_MOVE';

export function doMove(index,player) {
    console.log('doMove');
    return{ index,player, type: DO_MOVE };
    };