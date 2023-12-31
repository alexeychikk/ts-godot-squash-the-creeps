import { onready, property } from '../godot/decorators';

export default class Player extends godot.CharacterBody3D {
  @property({ default: 14 })
  public speed!: number;

  @property({ default: 75 })
  public fallAcceleration!: number;

  private pivot!: godot.Node3D;

  private targetVelocity = new godot.Vector3();

  _ready(): void {
    this.pivot = this.get_node('Pivot') as godot.Node3D;
  }

  _physics_process(delta: number): void {
    if (godot.Engine.is_editor_hint()) return;

    let direction = new godot.Vector3();

    if (godot.Input.is_action_pressed('move_left' as any, false)) {
      direction.x -= 1;
    }
    if (godot.Input.is_action_pressed('move_right' as any, false)) {
      direction.x += 1;
    }
    if (godot.Input.is_action_pressed('move_forward' as any, false)) {
      direction.z -= 1;
    }
    if (godot.Input.is_action_pressed('move_back' as any, false)) {
      direction.z += 1;
    }

    if (direction.x !== 0 || direction.z !== 0) {
      direction = direction.normalized();
      this.pivot.look_at(
        new godot.Vector3(
          this.position.x + direction.x,
          this.position.y + direction.y,
          this.position.z + direction.z,
        ),
        godot.Vector3.UP,
      );
    }

    this.targetVelocity.x = direction.x * this.speed;
    this.targetVelocity.z = direction.z * this.speed;

    if (!this.is_on_floor()) {
      this.targetVelocity.y -= this.fallAcceleration * delta;
    }

    this.velocity = this.targetVelocity;
    this.move_and_slide();
  }
}
