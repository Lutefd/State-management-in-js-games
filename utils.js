export function drawStatusText(context, input, player) {
  context.font = `3rem Helvetica`;
  context.fillText(`Ultimo comando:` + input.lastKey, 20, 50);
  context.fillText(`Estado atual: ` + player.currentState.state, 20, 110);
}
