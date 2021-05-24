/*

select  "films"."filmId",
        "films"."title",
        "films"."replacementCost" as "TotalCost"



group by "films"."filmId"
order by ("Revenue" - "TotalCost") desc


*/

/*TOTAL COST OF FILMS */

WITH cte_total_cost AS (
  select  "films"."filmId",
          "films"."title",
          count("inventory"."inventoryId") as "numberOfCopies",
          sum("films"."replacementCost") as "totalCost"
  from    "films"
  join    "inventory" using ("filmId")

  group by ("films"."filmId")
  /*order by "totalCost" desc ;
  limit 10;*/
),

/* TOTAL REVENUE FROM FILMS */
cte_total_revenue AS (
  select    "films"."filmId",
            "films"."title",
            count("rentals"."rentalId") as "numberOfRentals",
            sum ("films"."rentalRate") as "totalRevenue"
  from    "films"
  join    "inventory" using ("filmId")
  join    "rentals" using ("inventoryId")

  group by ("films"."filmId")
  /*order by "totalRevenue" desc;
  limit 10; */
)

  select    "cte_total_cost"."filmId",
            "cte_total_cost"."title",
            "cte_total_revenue"."totalRevenue" - "cte_total_cost"."totalCost" as "profit"
  from "cte_total_cost"
  join "cte_total_revenue" using ("filmId")
  group by "cte_total_cost"."filmId"
  order by "profit" desc
  limit 10;
