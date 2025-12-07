export abstract class StringValueObject {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  // CORRECCIÓN: Aceptamos string O StringValueObject
  equalsTo(anotherValue: string | StringValueObject): boolean {
    const other = anotherValue instanceof StringValueObject 
      ? anotherValue.value 
      : anotherValue;
    return this.value === other;
  }

  isEmpty(): boolean {
    return !this.value;
  }

  // CORRECCIÓN: Lo mismo aquí
  differentTo(anotherValue: string | StringValueObject): boolean {
    const other = anotherValue instanceof StringValueObject 
      ? anotherValue.value 
      : anotherValue;
    return this.value !== other;
  }

  hasMoreCharacterThan(length = 30): boolean {
    return this.value.length > length;
  }

  hasLessCharacterThan(length = 5): boolean {
    return this.value.length < length;
  }

  toString(): string {
    return this.value;
  }
}
