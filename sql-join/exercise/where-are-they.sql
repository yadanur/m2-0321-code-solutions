select "addr"."line1" as "Street",
      "addr"."district",
      "cities"."name" as "city"
from "addresses" as "addr"
join "cities"
using ("cityId");
