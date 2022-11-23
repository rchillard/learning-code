# Structured Query Language (SQL)

It's time to revisit databases.

## Data Types

## Date
- DATE
- DATETIME
- TIMESTAMP
- TIME
- YEAR

### Numeric
- INT
- SMALLINT
- TINYINT
- MEDIUMINT
- BIGINT
- DECIMAL
- NUMERIC
- FLOAT
- DOUBLE
- BIT

### String
- CHAR
- VARCHAR
- BINARY
- VARBINARY
- BLOB
- TINYBLOB
- MEDIUMBLOB
- LONGBLOB
- TEXT
- TINYTEXT
- MEDIUMTEXT
- LONGTEXT
- ENUM

## Getting Started

These setup instructions are for Kubuntu 20.04 on a development machine.  If you stumble upon this, please use a secure install script for a real database or a production system.  This is only for installing a local database to hack against for fun and great learning.

### MySQL Server

Install MySQL server:
```bash
sudo apt install mysql-server
```

Verify that MySQL is running with:
```bash
systemctl status mysql
```

Connect to MySQL:
```bash
sudo mysql
```

Change the password of the root user:
```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'your_new_password';
```

Test that you can login with the new password:
```bash
mysql -u root -p
```

Quit out of the mysql command prompt.

Run the secure installation script, as it's an edifying experience:

```bash
mysql_secure_installation
```

### MySQL Workbench

The easiest way to install MySQL Workbench is as a snap: [mysql-workbench-community](https://snapcraft.io/mysql-workbench-community).

On Kubuntu that means:
```bash
sudo snap install mysql-workbench-community
```

### AppArmor for MySQL Workbench

If your development machine is running AppArmor, then you will experience permission errors.

Check if AppArmor has a profile active:

```bash
aa-status
```

In a positive result, you will see a message like this:

```
apparmor module is loaded.
78 profiles are loaded.
74 profiles are in enforce mode.
 ...
 snap.mysql-workbench-community.hook.configure
 snap.mysql-workbench-community.mysql-workbench-community
 ...
```

Adjust permissions so that AppArmor does not prevent connections using the workbench:

```bash
snap connect mysql-workbench-community:password-manager-service 
snap connect mysql-workbench-community:ssh-keys
```

You can also do this in the GUI using the Software Center by:
1. Searching for 'sql' under 'Installed'
2. Selecting 'Configure permissions...'
3. Check both settings to grant permissions:
   1. password-manager-service
   2. ssh-keys

From here, you should be good to go!
