package de.fhg.iais.roberta.ast.syntax.sensors;

import org.junit.Test;

import de.fhg.iais.roberta.util.test.nxt.Helper;

public class TimerSensorTest {
    Helper h = new Helper();

    @Test
    public void getTimerValue() throws Exception {
        String a = "\nGetTimerValue(timer1)";

        this.h.assertCodeIsOk(a, "/ast/sensors/sensor_getSampleTimer.xml");
    }

    @Test
    public void resetTimer() throws Exception {
        String a = "\nResetTimerValue(timer1);";

        this.h.assertCodeIsOk(a, "/ast/sensors/sensor_resetTimer.xml");
    }
}
