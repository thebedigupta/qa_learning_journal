import { User, ProcessedUser } from './types';
import { users } from './data';

try {
  // Function help in creating fake fetching delay

  async function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // function give all the users

  async function fetchUsers(data: User[]): Promise<User[]> {
    await delay(500);
    const allUsers = data;
    return allUsers;
  }

  // fetch only those users which meet certain conditions

  async function processUsers(fetchdata: User[]): Promise<ProcessedUser[]> {
    const filteredData: User[] = fetchdata.filter(
      (user) => user.isActive === true,
    );

    const processUser: ProcessedUser[] = filteredData.map((user) => {
      const summary = `${user.name} is ${user.age} years old.`;
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        summary: summary,
      };
    });
    return processUser;
  }

  async function generateReport(
    processUsers: ProcessedUser[],
  ): Promise<string> {
    await delay(300);

    if (processUsers.length === 0) {
      return `User report \n No User is Active`;
    }

    const rowsReport = processUsers.map(
      (user, index) =>
        `${index + 1}. ID : ${user.id} | Name : ${user.name} | Email : ${user.email} | ${user.summary}`,
    );

    const report = `User Report \n  Total Active Users : ${processUsers.length} \n\n${rowsReport.join('\n')}`;
    return report;
  }

  fetchUsers(users).then((resolvedUser) => {
    processUsers(resolvedUser).then((data) => {
      generateReport(data).then((report) => {
        console.log(report);
      });
    });
  });
} catch (error) {
  console.error('Error:', error);
}
