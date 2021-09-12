USE catho_devfullstack_training;

DROP TABLE IF EXISTS employers;

CREATE TABLE IF NOT EXISTS employers(
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  active BOOLEAN DEFAULT true
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
