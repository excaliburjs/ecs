import { Entity } from "./entity.ts";

export class GameEvent<T, U = T> {
  /**
   * Target object for this event.
   */
  public target: T | null = null;

  /**
   * Other target object for this event
   */
  public other: U | null = null;

  /**
   * If set to false, prevents event from propagating to other actors. If true it will be propagated
   * to all actors that apply.
   */
  public get bubbles(): boolean {
    return this._bubbles;
  }

  public set bubbles(value: boolean) {
    this._bubbles = value;
  }

  private _bubbles: boolean = true;
  /**
   * Prevents event from bubbling
   */
  public stopPropagation() {
    this.bubbles = false;
  }
}

export class InitializeEvent<T extends Entity = Entity, TContext = any> extends GameEvent<Entity, never> {
  /**
   * @param context  The reference to the current engine
   */
  constructor(
    public context: TContext,
    public self: T
  ) {
    super();
    this.target = self;
  }
}


export class AddEvent<T extends Entity = Entity, TContext = any> extends GameEvent<T, never> {
  constructor(
    public context: TContext,
    public self: T
  ) {
    super();
    this.target = self;
  }
}


export class RemoveEvent<T extends Entity = Entity, TContext = any> extends GameEvent<T, never> {
  constructor(
    public context: TContext,
    public self: T
  ) {
    super();
    this.target = self;
  }
}

export class PreUpdateEvent<T extends Entity = Entity, TContext = any> extends GameEvent<T, never> {
  constructor(
    public context: TContext,
    public elapsed: number,
    public self: T
  ) {
    super();
    this.target = self;
  }
}

export class PostUpdateEvent<T extends Entity = Entity, TContext = any> extends GameEvent<T, never> {
  constructor(
    public context: TContext,
    public elapsed: number,
    public self: T
  ) {
    super();
    this.target = self;
  }
}

export class KillEvent extends GameEvent<Entity, never> {
  constructor(public self: Entity) {
    super();
    this.target = self;
  }
}
