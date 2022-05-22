// Chakra imports
import {
  Button,
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";
import { RocketIcon } from "components/Icons/Icons";
import { StatsIcon } from "components/Icons/Icons";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { rtlDashboardTableData, rtlTimelineData } from "variables/general";
import ActiveUsers from "../Dashboard/components/ActiveUsers";
import BuiltByDevelopers from "../Dashboard/components/BuiltByDevelopers";
import ChartStatistics from "../Dashboard/components/ChartStatistics";
import MiniStatistics from "../Dashboard/components/MiniStatistics";
import OrdersOverview from "../Dashboard/components/OrdersOverview";
import Projects from "../Dashboard/components/Projects";
import SalesOverview from "../Dashboard/components/SalesOverview";
import WorkWithTheRockets from "../Dashboard/components/WorkWithTheRockets";

export default function Dashboard() {
  // Chakra Color Mode

  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }} gap="26px">
        <SimpleGrid gap={{ sm: "12px" }} columns={4}>
            <ChartStatistics
              title={"תכנית"}
              amount={"בסיס +"}
              // percentage={20}
              icon={<WalletIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"תחילת התכנית"}
              amount={"1/1/2023"}
              percentage={0}
              icon={<RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"סיום התכנית"}
              amount={"3/5/2024"}
              percentage={30}
              icon={<CartIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
            <ChartStatistics
              title={"כסף שהופקד"}
              amount={"5000$"}
              percentage={40}
              icon={<StatsIcon h={"15px"} w={"15px"} color={iconBoxInside} />}
            />
          </SimpleGrid>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }} gap="26px" spacing="26px">
        <SimpleGrid rows={{ sm: 1, md: 2, xl: 3 }} spacing='24px'>
          <MiniStatistics
            title={"שער מנייה התחלה"}
            amount={"$53,000"}
            percentage={55}
            icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"שער מנייה סיום"}
            amount={"2,300"}
            percentage={5}
            icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <MiniStatistics
            title={"אחוז שיוני בסיום"}
            amount={"+3,020"}
            percentage={-14}
            icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
          <Button bg = {useColorModeValue("teal.300")}> בצע סימולציה</Button>
          {/* <MiniStatistics
            title={"أموال اليوم"}
            amount={"$173,000"}
            percentage={8}
            icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          /> */}
        </SimpleGrid>
        <SalesOverview
          title={"נתוני מנייה"}
          percentage={5}
          chart={<LineChart />}
        />
      </SimpleGrid>

      <SimpleGrid columns={{ sm: 1, md: 2, xl: 2 }}  gap="26px">
        <SalesOverview
          title={"נתוני מנייה"}
          percentage={5}
          chart={<BarChart />}
        />
        <MiniStatistics
            title={"בונוס"}
            amount={"7.5% בונוס במזומן + 25% משיעור עליית הריבית"}
            percentage={7.5}
            icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
          />
                  </SimpleGrid>


      
      {/* <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
        <BuiltByDevelopers
          title={"بناها المطورون"}
          name={"لوحة معلومات Purity UI"}
          description={
            "من الألوان والبطاقات والطباعة إلى العناصر المعقدة ، ستجد الوثائق الكاملة."
          }
          image={
            <Image
              src={logoChakra}
              alt='chakra image'
              minWidth={{ md: "300px", lg: "auto" }}
            />
          }
        />
        <WorkWithTheRockets
          backgroundImage={peopleImage}
          title={"العمل مع الصواريخ"}
          description={
            "تكوين الثروة هو لعبة ثورية حديثة ذات محصلة إيجابية. الأمر كله يتعلق بمن يغتنم الفرصة أولاً."
          }
        />
      </Grid> */}
      {/* <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
        <ActiveUsers
          title={"المستخدمين النشطين"}
          percentage={23}
          chart={<BarChart />}
        />
        <SalesOverview
          title={"نظرة عامة على المبيعات"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid> */}
      {/* <Grid
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap='24px'>
        <Projects
          title={"المشاريع"}
          amount={30}
          captions={["Companies", "Members", "Budget", "Completion"]}
          data={rtlDashboardTableData}
        />
        <OrdersOverview
          title={"نظرة عامة على الطلبات"}
          amount={30}
          data={rtlTimelineData}
        />
      </Grid> */}
    </Flex>
  );
}
