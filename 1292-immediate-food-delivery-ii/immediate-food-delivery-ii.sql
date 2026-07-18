-- Write your PostgreSQL query statement below
with first_order as (
    select customer_id,min(order_date) as order_date
    from Delivery
    group by customer_id
)

select ROUND(AVG(
    CASE
    WHEN order_date =customer_pref_delivery_date THEN 1.0
    ELSE 0.0
    END
)*100,2) as immediate_percentage 
from Delivery
where (customer_id,order_date) in (select * from first_order);
