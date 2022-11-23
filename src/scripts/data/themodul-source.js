const dataSource = '../data/dashboard.json';

class TheModulSource {
  static async ModulDashboard() {
    const response = await fetch(dataSource);
    const responseJson = await response.json();
    return responseJson.dashboard;
  }

}

export default TheModulSource;
