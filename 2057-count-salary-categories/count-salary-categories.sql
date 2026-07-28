-- Write your PostgreSQL query statement below
WITH categories(category) AS (
    VALUES
        ('Low Salary'),
        ('Average Salary'),
        ('High Salary')
),
counts as (
select    CASE
        WHEN income  > 50000 THEN 'High Salary'
        WHEN income BETWEEN 20000 AND 50000 THEN'Average Salary'
        ELSE 'Low Salary'
    END AS category,count(*)as account_counts

from Accounts
group by category
)

select (categories.category),COALESCE(counts.account_counts,0) as accounts_count
from categories 
left join counts on categories.category=counts.category



  