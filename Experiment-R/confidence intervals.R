library(ggplot2)
library(boot)
library(readr)

ErrorData <- read_csv("Bar and Error.csv")

meanfun <- function(data, i){
  return(mean(data[i]))   
}

bresults<- boot(data=ErrorData$Bar, statistic = meanfun, R=1000)
presults<- boot(data=ErrorData$Pie, statistic = meanfun, R=1000)
sbresults<- boot(data=ErrorData$Stacked, statistic = meanfun, R=1000)

bci <- boot.ci(bresults, type = "bca")
pci <- boot.ci(presults, type = "bca")
sbci <- boot.ci(sbresults, type = "bca")

BCI <- read_csv("Bootstrap CI.csv")

ggplot(BCI, aes(vizType, LogError)) +
  geom_errorbar(aes(ymin = BCI$min, ymax = BCI$max)) +
  geom_point(aes(x=BCI$vizType, y=BCI$Mean), colour="black", size=3)