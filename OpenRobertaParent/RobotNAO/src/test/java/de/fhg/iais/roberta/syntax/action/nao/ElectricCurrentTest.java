package de.fhg.iais.roberta.syntax.action.nao;

import org.junit.Assert;
import org.junit.Test;

import de.fhg.iais.roberta.util.test.nao.Helper;

public class ElectricCurrentTest {
    Helper h = new Helper();

    @Test
    public void make_ByDefault_ReturnInstanceOfElectricCurrentClass() throws Exception {
        String expectedResult = "BlockAST [project=[[Location [x=63, y=63], " + "MainTask []], " + "[Location [x=87, y=113], " + "ElectricCurrent [LHAND]]]]";
        
        String result = this.h.generateTransformerString("/action/electricCurrent.xml");

        Assert.assertEquals(expectedResult, result);
    }
    /*
    @Test
    public void astToBlock_XMLtoJAXBtoASTtoXML_ReturnsSameXML() throws Exception {

        this.h.assertTransformationIsOk("/action/electricCurrent.xml");
    }*/
}