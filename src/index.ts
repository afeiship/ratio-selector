/**
 * 根据比例随机选择一个 name 值
 * @param {Array<{ value: number; name: string }>} items - 包含比例和名称的数组
 * @returns {string} - 返回根据比例随机选择的 name 值
 */

type ValueItem = {
  value: number;
  name: string;
};

const ratioSelector = (items: ValueItem[]): string => {
  // 校验输入是否有效
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error('Input must be a non-empty array of items.');
  }

  // 确认 value 为 number，如果不是，则 parseFloat 处理
  for (const item of items) {
    if (typeof item.value !== 'number') {
      item.value = parseFloat(item.value);
    }
    if (isNaN(item.value)) {
      throw new Error('Invalid value in input array.');
    }
  }

  // 确保所有 value 的总和为 1
  const totalvalue = items.reduce((sum, item) => sum + item.value, 0);
  if (Math.abs(totalvalue - 1) > 1e-6) {
    throw new Error('The sum of all values must be approximately 1.');
  }

  // 随机生成一个 [0, 1) 范围内的数字
  const random = Math.random();

  // 按累积概率选择对应的 name
  let cumulativeProbability = 0;
  for (const item of items) {
    cumulativeProbability += item.value;
    if (random < cumulativeProbability) {
      return item.name;
    }
  }

  // 如果未匹配到（理论上不会发生），返回最后一个 name
  return items[items.length - 1].name;
};

export default ratioSelector;
