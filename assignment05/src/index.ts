class Dict {
  private dictionary: { [key: string]: string } = {};

  public add(key: string, value: string): void {
    if (this.dictionary[key]) {
      throw new Error(`Key ${key} already exists`);
    }
    this.dictionary[key] = value;
  }

  public get(key: string): string {
    return this.dictionary[key];
  }

  public delete(key: string) {
    delete this.dictionary[key];
  }

  public update(key: string, value: string): void {
    this.dictionary[key] = value;
  }

  public showAll(): void {
    console.log(this.dictionary);
  }

  public count(): number {
    return Object.keys(this.dictionary).length;
  }
}

const dict = new Dict();
dict.add('key1', 'value1');
dict.add('key2', 'value2');
dict.add('key3', 'value3');
dict.get('key1');
dict.get('key2');
dict.get('key3');
dict.delete('key2');
dict.update('key1', 'value1-updated');
dict.showAll();
dict.count();
