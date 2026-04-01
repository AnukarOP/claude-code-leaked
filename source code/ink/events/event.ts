// GitHub: https://github.com/AnukarOP
// Repo: https://github.com/AnukarOP/claude-code-leaked

export class Event {
  private _didStopImmediatePropagation = false

  didStopImmediatePropagation(): boolean {
    return this._didStopImmediatePropagation
  }

  stopImmediatePropagation(): void {
    this._didStopImmediatePropagation = true
  }
}
