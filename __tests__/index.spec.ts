import ratioSelector from '../src';

describe('Normal test cases', () => {
  test('tests 1000 times', () => {
    const items = [
      { name: 'A', value: 0.5 },
      { name: 'B', value: 0.3 },
      { name: 'C', value: 0.2 }
    ];

    const results: Record<string, number> = { A: 0, B: 0, C: 0 };
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const result = ratioSelector(items);
      results[result]++;
    }

    // 检查每个选项的实际比例是否在预期比例的合理范围内（±5%）
    expect(results.A / iterations).toBeCloseTo(0.5, 1);
    expect(results.B / iterations).toBeCloseTo(0.3, 1);
    expect(results.C / iterations).toBeCloseTo(0.2, 1);
  });

  test('throws error for empty array', () => {
    expect(() => ratioSelector([])).toThrow('Input must be a non-empty array of items.');
  });

  test('throws error when ratios do not sum to 1', () => {
    const invalidItems = [
      { name: 'A', value: 0.3 },
      { name: 'B', value: 0.3 }
    ];
    expect(() => ratioSelector(invalidItems)).toThrow(
      'The sum of all values must be approximately 1.'
    );
  });

  test('returns last item when random is exactly 1', () => {
    // Mock Math.random to always return 0.99999999
    const originalMath = global.Math;
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.99999999;
    global.Math = mockMath;

    const items = [
      { name: 'A', value: 0.3 },
      { name: 'B', value: 0.3 },
      { name: 'C', value: 0.4 }
    ];

    expect(ratioSelector(items)).toBe('C');
    // Restore original Math
    global.Math = originalMath;
  });

  test('handles extreme ratios - 100%', () => {
    const items = [
      { name: 'A', value: 1 },
      { name: 'B', value: 0 },
      { name: 'C', value: 0 }
    ];

    const iterations = 100;
    for (let i = 0; i < iterations; i++) {
      expect(ratioSelector(items)).toBe('A');
    }
  });

  test('handles extreme ratios - 50/50', () => {
    const items = [
      { name: 'A', value: 0.5 },
      { name: 'B', value: 0.5 }
    ];

    const results: Record<string, number> = { A: 0, B: 0 };
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const result = ratioSelector(items);
      results[result]++;
    }

    expect(results.A / iterations).toBeCloseTo(0.5, 1);
    expect(results.B / iterations).toBeCloseTo(0.5, 1);
  });

  test('handles extreme ratios - 0%', () => {
    const items = [
      { name: 'A', value: 0 },
      { name: 'B', value: 0.6 },
      { name: 'C', value: 0.4 }
    ];

    const iterations = 100;
    for (let i = 0; i < iterations; i++) {
      const result = ratioSelector(items);
      expect(result).not.toBe('A');
    }
  });

  test('handles special ratio combinations', () => {
    const items = [
      { name: 'A', value: 0.9 },
      { name: 'B', value: 0.05 },
      { name: 'C', value: 0.05 }
    ];

    const results: Record<string, number> = { A: 0, B: 0, C: 0 };
    const iterations = 1000;

    for (let i = 0; i < iterations; i++) {
      const result = ratioSelector(items);
      results[result]++;
    }

    expect(results.A / iterations).toBeCloseTo(0.9, 1);
    expect(results.B / iterations).toBeCloseTo(0.05, 1);
    expect(results.C / iterations).toBeCloseTo(0.05, 1);
  });
});
