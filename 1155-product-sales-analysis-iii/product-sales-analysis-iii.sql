-- Write your PostgreSQL query statement below
SELECT product_id,year as first_year ,quantity ,price
FROM Sales where (product_id,year) in
(select product_id,min(year) as year from Sales
group by product_id 
)