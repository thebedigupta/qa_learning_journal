interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

interface ProcessedUser {
  id: number;
  name: string;
  email: string;
  summary: string;
}

async function fetchUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users: User[] = [
        {
          id: 101,
          name: 'Sheetal',
          email: 'sheetal@gmail.com',
          age: 43,
          isActive: true,
        },
        {
          id: 102,
          name: 'Shyam',
          email: 'shyam@gmail.com',
          age: 34,
          isActive: true,
        },
        {
          id: 103,
          name: 'Shyam Bihari',
          email: 'shyambihari@gmail.com',
          age: 13,
          isActive: false,
        },
        {
          id: 104,
          name: 'Monika Kumari',
          email: 'monika@gmail.com',
          age: 76,
          isActive: true,
        },
        {
          id: 105,
          name: 'Shital',
          email: 'shital@gmail.com',
          age: 12,
          isActive: true,
        },
      ];
      resolve(users);
    }, 500);
  });
}

function processUsers(users: User[]): ProcessedUser[] {
  return users
    .filter((user) => user.isActive === true)
    .map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      summary: `User ${user.name} aged ${user.age}`,
    }));
}

async function generateReport(
  processedUsers: ProcessedUser[],
): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const summaryLines: string = processedUsers
        .map((user) => user.summary)
        .join('\n');

      const report = [
        'User Report',
        `Total Active Users: ${processedUsers.length}`,
        '',
        summaryLines,
      ].join('\n');

      resolve(report);
    }, 300);
  });
}

async function main(): Promise<void> {
  try {
    const users = await fetchUsers();
    const processedUsers = processUsers(users);
    const report = await generateReport(processedUsers);
    console.log(report);
  } catch (error) {
    console.error('Pipeline failed:', error);
  }
}

void main();
