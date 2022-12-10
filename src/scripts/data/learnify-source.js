import bisnis from './bisnis.json';

class LearnifySource {
  static searchModul(keyword) {
    return new Promise((resolve, reject) => {
      const filteredModul = bisnis.bisnis.filter((bisnis) => bisnis.title.toLowerCase().includes(keyword.toLowerCase()));

      if (filteredModul.length) {
        resolve(filteredModul);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default LearnifySource;
